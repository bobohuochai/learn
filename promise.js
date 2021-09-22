/**
 * 手动实现promises all
 * @param {} promises 
 */
function all(promises){
  if(!promises || !promises.length){
      throw new Error(`${promises} 不可迭代`)
  }
  const result =[]
  let count =0 
  return new Promise((resolve,reject)=>{
    for(let i=0;i<promises.length;i++){
      let value = promises[i]
      const key = i
      !value.then ? (value=Promise.resolve(value)):value
      value.then((res)=>{
         count++
         result[key]=res
         if(count === promises.length){
             resolve(result)
         }
      },(err)=>{
         reject(err)
      })
    }
  })

}

/***
 * promise.race 手动实现
 */
 function race(promises){
    if(!promises || !promises.length){
        throw new Error(`${promises} 不可迭代`)
    }
    return new Promise((resolve,reject)=>{
      for(let p of promises){
        !p.then ? (p=Promise.resolve(p)):p
        p.then((res)=>{
           resolve(res)
        },(err)=>{
           reject(err)
        })
      }
    })
}


var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

all([p1,p2,p3]).then((values)=>{
  console.log(`all`,values)
})

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 50, 'one');
  });
  
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 60, 'two');
});

race([promise1,promise2]).then((value)=>{
    console.log(`race`,value)
})


/**
 * 手动实现promise
 */
function promise(executor){
   this.value = null
   this.reason = null
   this.status ='pending'
   // 有可能执行then的时候状态为pending，所以需要将then 回调参数保存
   this.resolveCallbacks = []
   this.rejectCallbacks = []
   function resolve(value){
      if(this.status !=='pending') return
      this.status = 'resolve'
      this.value = value
      this.resolveCallbacks.map(fn=>fn(this.value))
   }
   function reject(value) {
      if(this.status !== 'pending') return
      this.status = 'reject'
      this.reason = reason
      this.resolveCallbacks.map(fn=>fn(this.reason))
   }
   executor(resolve.bind(this),reject.bind(this))
}
promise.prototype.then = function(onResolve,onReject){
  if(this.status === 'pending'){
    this.resolveCallbacks.push(onResolve)
    this.rejectCallbacks.push(onReject)
  }
  if(this.status === 'resolve'){
    console.log('then==>',this.status,this.value)
    onResolve(this.value)
  }
  if(this.status === 'reject'){
    onReject(this.reason)
  }
}

new promise((resolve,reject)=>{
  setTimeout(() => {
    resolve(1);
  }, 500);
}).then((value)=>{
  console.log('my promise',value)
})

/**
 * 手写promise
 */

