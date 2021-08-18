const test = [{'name':'Daro','age':23, 'check':true},{'name':'Daro','age':23,'check':false}]
test.filter((x)=>{ return x.check == true})
console.log(test)