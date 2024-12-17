```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: using functional update to avoid infinite loop
    setCount(prevCount => prevCount + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```