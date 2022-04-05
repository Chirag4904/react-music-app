import {v4 as uuidv4} from 'uuid';

function chillHop() {
    return [
        {
            name: "Riverside",
            artist: "SwuM, G Mills",
            cover: "https://chillhop.com/wp-content/uploads/2022/02/3f38419a1c54c6c8bdb2a2d5785a1b518f0e5ab6-1024x1024.jpg",
            id: uuidv4(),
            active:true,
            color:["#BA4A46","#FDF0DD"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=31516'
        },
        {
            name: "Chirag",
            artist: "SwuMills",
            cover: "https://chillhop.com/wp-content/uploads/2022/02/3f38419a1c54c6c8bdb2a2d5785a1b518f0e5ab6-1024x1024.jpg",
            id: uuidv4(),
            active:false,
            color:["#BA4A46","#FDF0DD"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=31516'
        },
        {
            name: "vidhi",
            artist: "Safbhabefhbewfls",
            cover: "https://chillhop.com/wp-content/uploads/2022/02/3f38419a1c54c6c8bdb2a2d5785a1b518f0e5ab6-1024x1024.jpg",
            id: uuidv4(),
            active:false,
            color:["#BA4A46","#FDF0DD"],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=31516'
        }
    ];
}

export default chillHop;