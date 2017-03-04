// my_max = function(numbers) {
// 	var max = array[0];
// 	for (i = 1; i < array.length; i++) {
// 		if(array[i] > max){
// 			max = array[i]
// 		}
// 	}
// 	console.log(max);
// }

// my_max([1,22,44,22,1,54,6644,3])


// vowel_count = function(word) {
// 	var vowels = 'aeiou';

// 	var num = 0;

// 	for (i = 0; i < word.length; i++) {
// 		if(vowels.search(word[i].toLowerCase()) > -1){
// 			num++;
// 		}
// 	}

// 	console.log(num)
// }

// vowel_count('Aidan')


reverse = function(string) {
	var ns = ''
	for (i = string.length -1; i > -1; i--) {
		ns = ns.concat(string[i]);
	}
	console.log(ns)
}
reverse('this is a happy song');





















