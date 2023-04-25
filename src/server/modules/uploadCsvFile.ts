//Find the absolute path of the json directory
import path from 'path';
import fs from 'fs';

import { parse } from 'csv';

export default async function handler(req: any, res: any, name: string) {
    try {
        const jsonDirectory = path.join(process.cwd(), 'csv');
        const data: Array<Record<string, string>> = [{ event: '', all: '', unique: '', date: '', dateEnd: '' }];
        //Read the json data file data.json
        await fs
            .createReadStream(`${jsonDirectory}/${name}.csv`)
            .pipe(parse({ delimiter: ',' }))
            .on('data', (r) => {
                data.push({ event: r[0], all: r[1], unique: r[2], date: r[3], dateEnd: r[4] });
            })
            //Return the content of the data file in json format
            .on('end', () => {
                res.status(200).json(JSON.stringify(data));
            });
    } catch (e: any) {
        console.error('[Error reading file]: ', e?.message ?? e);
    }
}
