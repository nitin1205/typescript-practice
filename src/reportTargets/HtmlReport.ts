import fs from 'fs';
import path from 'path';

import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget{
    print(report: string): void {
        const html = `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </div>
        `;
        fs.writeFileSync(path.join(__dirname, '..', '..', 'data', 'report.html'), html);
    };
};