const fs = require('node:fs');
const path = require('path');
let content = ``;
let data = `
import { Icons } from '../assets/icons'; \n
import { Images } from '../assets/images'; \n
`;

let last_project = '';

const luxe_array = [   
    'JR',
    'chanel',
    'cordon',
    'eres',
    'lacoste',
    'martell',
    'ritz'
];

const design_array = [   
    'mcm',
    'vieillecroze'
];

const ecommerce_array = [   
    'agnesb',
    'gusto',
    'quilvest',
    'brandalley',
    'squarebreak',
    'onefinestay'
];
const cosmetic_array = [   
    'guerlain',
    'perfect',
    'shiseido',
    'sublimousse'
];
const automotive_array = [   
    'volvo',
    'motor',
    'bmw',
    'teaser'
];

let data_luxe = 
`export const FEATURES_DATA_LUXE = [`;

let data_automotive = 
`export const FEATURES_DATA_AUTOMOTIVE = [`;

let data_cosmetic = 
`export const FEATURES_DATA_COSMETIC = [`;

let data_ecommerce = 
`export const FEATURES_DATA_ECOMMERCE = [`;

let data_design = 
`export const FEATURES_DATA_DESIGN = [`;



const folderPath = './niaoti/src/assets/images';
let tabImages = [];


const isFile = fileName => {
    return fs.lstatSync(fileName).isFile();
};


let tmp_images = '';
let index = 0;

function closeElt(elt) {
    tmp_images += '\n]';
    if(luxe_array.includes(elt)) {
        data_luxe += tmp_images;
        data_luxe += '\n },';
    }
    if(automotive_array.includes(elt)) {
        data_automotive += tmp_images;
        data_automotive += '\n },';
    }
    if(cosmetic_array.includes(elt)) {
        data_cosmetic += tmp_images;
        data_cosmetic += '\n },';
    }
    if(ecommerce_array.includes(elt)) {
        data_ecommerce += tmp_images;
        data_ecommerce += '\n },';
    }
    if(design_array.includes(elt)) {
        data_design += tmp_images;
        data_design += '\n },';
    }
}

function create_image(elt) {
    let tmp = `
    {
        title: "image 1",
        image: Images.${elt}
    },`;
    return tmp;
}

function create_content(title, elt){
    index ++;
    let tmp = `
    {
        id: '${index}',
        title: '${title}',
        description: '',
        icon: Icons.niaoti,
        image: Images.${elt},
    `;
    return tmp;
}

function create_title(elt) {
    var str_array = elt.split('_');
    str_array.pop();
    var title = str_array.join(' ');
    let tmp_content = '';

    if(typeof str_array[0] === 'undefined') return title;

    if(str_array[0] != last_project) {
        console.log('last_project:', last_project);
        console.log('str_array[0]:', str_array[0]);
        closeElt(last_project);
        last_project = str_array[0];
        tmp_content = create_content(title, elt);
        tmp_images = 'images : [';

        if(luxe_array.includes(last_project)) {
            data_luxe += tmp_content;
        }
        if(automotive_array.includes(last_project)) {
            data_automotive += tmp_content;
        }
        if(cosmetic_array.includes(last_project)) {
            data_cosmetic += tmp_content;
        }
        if(ecommerce_array.includes(last_project)) {
            data_ecommerce += tmp_content;
        }
        if(design_array.includes(last_project)) {
            data_design += tmp_content;
        }
        
        
    }else{
        tmp_images += create_image(elt);
    }

    return title;
}


fs.readdirSync(folderPath)
.map(fileName => {
    let str = path.parse(fileName).name;
    str = str.replaceAll('-', '_');
    content += `import ${str} from './images/${fileName}';\n`;
    tabImages.push(str);
    create_title(str);
    return path.join(folderPath, fileName);
})
.filter(isFile);

content += '\n\nexport const Images = {\n';
tabImages.forEach(image => {
    content += `    ${image},\n`;
});

content += '}';

fs.writeFile('./images.js', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

data_luxe += ']';
data += data_luxe +'\n';
data_automotive += ']';
data += data_automotive+'\n';
data_cosmetic += ']';
data += data_cosmetic+'\n';
data_ecommerce += ']';
data += data_ecommerce+'\n';
data_design += ']';
data += data_design+'\n';


fs.writeFile('./mockData.js', data, err => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
    }
});

