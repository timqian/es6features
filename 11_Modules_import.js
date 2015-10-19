// 整体导入
import * as math from './11_Modules_export';
console.log('2 pi = ' + math.sum(math.pi, math.pi));

// 解构(destructure)导入
import {sum, pi} from './11_Modules_export';
console.log('2 pi = ' + sum(pi, pi));
