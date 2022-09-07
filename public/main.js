console.log('main js in');


const canvas = document.getElementById('world');
console.log('canvas: ', canvas);
/**
 * webgl render context
 */
const gl = canvas.getContext('webgl');

if(!gl){
  throw new Error('WebGL not supported');
}