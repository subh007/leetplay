/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2]
    mergedArray.sort((a,b) => a-b)
    if(mergedArray.length % 2 === 0) {
        const index = mergedArray.length/2
        const median = (mergedArray[index - 1] + mergedArray[index]) / 2
        return median
    }
    else {
        const index = Math.floor(mergedArray.length/2)
        const median = mergedArray[index]
        return median
    }
};