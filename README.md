# convert money naira (₦) --> thai (฿)

## Project setup

```
npm install -g @vue/cli         
vue create my-package           
npm install --global rollup                 //(1)
```
``` bash
#install package for use in this package
npm install text-mask-addons --save         //(2)      
npm install vue-text-mask --save            //(3)           
npm install -g vue-sfc-rollup               //(4)              
```
``` bash
#create single component or library
sfc-init
```
``` bash
#install rollup plugin
#use --save for update dependencies in package.json file
npm install rollup-plugin-buble --save      //(5)
npm install rollup-plugin-commonjs --save   //(6)
npm install rollup-plugin-replace --save    //(7) 
npm install rollup-plugin-terser --save     //(8)
npm install rollup-plugin-vue --save        //(9)
npm
```
(1) [Rollup.js](https://rollupjs.org/guide/en/)  
(2) [Package text-mask-addons](https://www.npmjs.com/package/text-mask-addons)  
(3) [Package vue-text-mask](https://www.npmjs.com/package/vue-text-mask)    
(4) [Package vue-sfc-rollup](https://github.com/team-innovation/vue-sfc-rollup)  
(5) [rollup-plugin-buble](https://www.npmjs.com/package/rollup-plugin-buble)     
(6) [rollup-plugin-commonjs](https://www.npmjs.com/package/rollup-plugin-commonjs)  
(7) [rollup-plugin-replace](https://www.npmjs.com/package/rollup-plugin-replace)     
(8) [rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser)  
(9) [rollup-plugin-vue](https://www.npmjs.com/package/rollup-plugin-vue)

## Compiles and hot-reloads for development
```
npm run serve
```

## Compiles and minifies for production
```
npm run build
```

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
