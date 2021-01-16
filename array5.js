// Merge Sorted Array
// problem : 把陣列2合併到陣列1裡，m為從陣列1第幾個IDX開始為0，n為陣列2的length

let nums1 = [1,2,3,4,5,6,7,0,0,0,0]
let nums2 = [2,5,6,7]
let m = 7
let n = 4
// nums1.splice(m,n,nums2)


// var len = m + n;
// m--;
// n--;
// while (len--) {
//     if (n < 0 || nums1[m] > nums2[n]) {
//         nums1[len] = nums1[m--];
//     } else {
//         nums1[len] = nums2[n--];
//     }
// }

// nums1.sort(function(a,b) {
//     return a - b
// })
// console.log(nums1)


nums1.splice(m, nums1.length - m);

var i = 0;
var j = 0;

while (j < nums2.length) {
    if (nums1[i] === undefined || nums1[i] > nums2[j]) {
        nums1.splice(i, 0, nums2[j]);
        j++;
        i++;
    } else {
        i++;
    }
}