var _ = require('underscore');
// 모듈 디렉터리 이름을 적으면 된다.
// underscore 의 변수명은 보통 '_'로 사용하는 규칙이 있다.
var arr = [3,6,9,1,12];
// 배열을 만든다.
// underscore는, 자바스크립트에서 부족한 배열 기능을 추가적으로 채워준다.
console.log(arr[0]);
console.log(_.first(arr));
// arr[0] 과 _.first(arr) 이 같은 기능을 한다는 것을 확인할 수 있다.
console.log(arr[arr.length-1]);
console.log(_.last(arr));
// arr[arr.length-1] 과 _.last(arr)이 같은 기능을 한다는 것을 확인할 수 있다.

/* 
Output:
3
3
12
12
*/
