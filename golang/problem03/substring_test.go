package problem03

import (
	"testing"
)

func Test_lengthOfLongestSubstring(t *testing.T) {
	input := []struct {
		input    string
		expected int
	}{
		{
			input:    "abcabcbb",
			expected: 3,
		}, {
			input:    "bbbbb",
			expected: 1,
		}, {
			input:    "pwwkew",
			expected: 3,
		},
	}

	for _, item := range input {
		actual := lengthOfLongestSubstring(item.input)
		if item.expected != actual {
			t.Errorf("failed expected:%d received:%d", item.expected, actual)
		} else {
			t.Logf("success expected:%d received:%d", item.expected, actual)
		}
	}
}
