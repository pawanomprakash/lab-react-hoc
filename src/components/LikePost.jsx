import HigherorderCounter from './counter'
 function LikePost(props) {
  const count=props.count;
  const increment=props.increment

  return (
    <div>
      <button onClick={increment}>Like Post {count}</button>
    </div>
  )
}

export default HigherorderCounter(LikePost)