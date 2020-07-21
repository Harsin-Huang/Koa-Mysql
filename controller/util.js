const path = require('path');
const fs = require('fs');
const sendToWormhole = require('stream-wormhole');

export class utilController {
    static async save(ctx) {
        const stream = await ctx.getFileStream();
        const fileName = stream.filename;

        // console.log('-----------开始上传 start--------------');
        
        // 文件处理，上传到云存储等等
        const target = path.join(__dirname, '../public/upload', stream.filename);
        let result = await new Promise((resolve, reject) => {
            const remoteFileStream = fs.createWriteStream(target);
            stream.pipe(remoteFileStream);
            let errFlag;
            remoteFileStream.on('error', err => {
                errFlag = true;
                sendToWormhole(stream);
                remoteFileStream.destroy();
                reject(err);
            });
            
            remoteFileStream.on('finish', async () => {
                if (errFlag) return;
                resolve(stream);
            });
        });
        // console.log('-----------结束上传 end--------------');
        
        ctx.status = 200
        ctx.body = {
            url: path.join('public/upload', stream.filename),
            fields: stream.fields,
        };
    }

}
