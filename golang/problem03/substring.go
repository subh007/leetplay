package problem03

// https://leetcode.com/problems/longest-substring-without-repeating-characters/
func lengthOfLongestSubstring(s string) int {
	arr := []byte(s)

	if len(arr) == 0 {
		return 0
	}

	if len(arr) == 1 {
		return 1
	}

	var flg int
	l, max := 1, 1
	for i := 1; i < len(arr); i++ {
		for j := i - 1; j >= flg; j-- {
			if arr[i] != arr[j] {
				l++
				if max < l {
					max = l
				}
			} else {
				flg = j + 1
			}
		}
		l = 1
	}
	return max
}
