const number = [4, 1, 5, 6, 7, 8, 9, 10, 10000]


const Sort = number.sort((a, b) => a - b)
console.log(Sort)

const even = number.filter((n) => n % 2 === 0)
console.log(even)

const Biggestno = number.reduce((a, b) => {
  return a + b
})

console.log(Biggestno)


const alpha = ["shivamdayma"]
// const reverse = alpha.split("").reverse()
// const replace = alpha.replaceAll("a","m")
// console.log(replace)



const upper = alpha.map((w) => w[0].toUpperCase() + w.slice(1))
console.log(upper)

const LogicPrac = () => {
  return (
    <div>


      {JSON.stringify(number)
      }
      { }

    </div>
  )
}

export default LogicPrac