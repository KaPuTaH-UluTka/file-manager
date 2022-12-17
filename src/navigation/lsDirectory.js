import * as fs from "fs";
import {resolve} from 'node:path'
import {cwd} from 'node:process';

export const list = () => {
    try {
        fs.readdir(resolve(cwd()), {withFileTypes: true}, (err, files) => {
            const directoryTable = files.map(dirent => {
                return dirent.isDirectory() ? {name: dirent.name, type: "directory"} : {name: dirent.name, type: "file"}
            })
            console.table(directoryTable.sort((a, b) => {
                if (a.type < b.type) return -1
                else if (a.type > b.type) return 1
                return 0;
            }))
        })

    } catch (err) {
        console.error('Operation failed');
    }
}
