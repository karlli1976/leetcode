/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

4个版本

ver 1：
- best time: 128ms
- 很直接就想到了『两车相遇』的解法：一边从0出发，一边从length-1出发，加起来等于target就完事
- 实现起来很快，基本上没怎么调试就pass了
- 提交两次，最好时间都在100ms+

ver 2：
- best time: 60ms
- 查看solution，知道了two-pass hash table的玩法
- 知道了js里面，用var myMap = new Map()来创建HashMap
- 知道console.log的输出位置不在网页的console，而被重定向了Run Code Result的Output
- 在for loop里面加了一句console.log，结果时间慢了68ms

ver 3:
- best time: 40ms
- 查看solution，知道了one-pass hash table的玩法
- 该版本解法，在return [i,j]时需要考虑i比j小，否则会出现期待值[0,1]而返回值[1,0]的情况。有待改进。(done)


ver 4:
- best time: 52ms
- 想起了let的用法，以替代var
- 在solution页面的comment里面，看到有人贴了一个js的解出来，号称"Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Two Sum."

参考该代码实现ver 4。

但在ver 3里面，我已经试过出现40ms。当时情况是faster than 97%。

不知是否免费用户的cpu时间片不固定，所以无法以此运行时间比较排名。

开始认真考虑购买premium，一年159美刀。但还没看到free user和premimu的区别在哪里？只要能做题就是了，提交服务器快慢有多大区别？

TODO：
- 了解js的hash table/map用法
- const comp={}的写法创建dictionary
- 比较var和let的用法
 */

var twoSum = function(nums, target) {
  
  // ver 4: best time 52ms
  //   "Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Two Sum."
  const comp = {};
  
  for (let i=0; i<nums.length; i++) {
    let complement = target - nums[i];
    
    if (comp[complement] >= 0) {
        return [comp[complement], i];
    }
    
    comp[nums[i]] = i;
  }
  
  // ver3: run 2 times, 52ms, 40ms
  // var map = new Map();
  
  // for (var i=0; i<nums.length; i++) {
  //   var complement = target - nums[i];
    
  //   // console.log("nums[" + i + "]=" + nums[i] + ", complement=" + complement);
    
  //   if (map.has(complement)) {
  //     // if (i < map.get(complement)) {
  //     //   return [i, map.get(complement)];
  //     // }
      
  //     return [map.get(complement), i];
  //   }
    
  //   map.set(nums[i], i);
  // }
  
  
  // ver 2: 60ms
//     var map = new Map();
    
//     for (var i=0; i < nums.length; i++) {
//         map.set(nums[i], i);
//     }
    
//     for (var i=0; i < nums.length; i++) {
//         var complement = target - nums[i];
  
//         // this log statement cause 68ms
//         // console.log("nums[" + i + "]=" + nums[i] + ", complement=" + complement);
      
//         if (map.has(complement) && map.get(complement) != i) {
//             return [i, map.get(complement)];
//         }
//     }
    
    
    

    // ver 1: 128ms
    
//     for (var i=0, len_i = nums.length; i < len_i; i++) {
//         for (var j=nums.length-1; j > 0; j--) {
//             if (i == j) {
//                 // find next
//                 break;
//             }

//             if (nums[i] + nums[j] == target) {
//                 // found it!
//                 return [i, j];
//             }

//         }
//     }    
    
};