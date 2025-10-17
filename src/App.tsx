import { useState, useRef } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  const handleCalculate = () => {
    // TODO: connect to stringCalculator later
    try {
      const nums = input.split(/,|\n/).map(Number);
      const sum = nums.reduce((a, b) => a + b, 0);
      setResult(sum);
      resultRef.current?.focus();
    } catch {
      setResult(null);
    }
  };

  return (
    <main style={{ padding: '20px', backgroundColor: '#fff', color: '#222' }}>
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=600&auto=format&fit=crop"
        alt="Abstract pattern representing calculation or numbers"
        width={600}
        height={400}
      />

      <h1>String Calculator</h1>

      <label htmlFor="numbersInput" style={{ display: 'block', marginTop: '1rem' }}>
        Enter numbers (comma or newline separated)
      </label>

      <textarea
        id="numbersInput"
        style={{
          width: '100%',
          margin: '10px 0',
          color: '#222',
          minHeight: '100px',
        }}
        placeholder="Example: 1,2,3 or 1\n2,3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleCalculate}
        style={{
          padding: '10px 16px',
          backgroundColor: '#008cba',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Calculate
      </button>

      {result !== null && (
        <div
          ref={resultRef}
          tabIndex={-1}
          aria-live="polite"
          role="status"
          style={{ color: 'green', marginTop: '10px' }}
        >
          Result: {result}
        </div>
      )}

      <div role="alert" style={{ marginTop: '10px', color: '#d9534f' }}>
        Make sure you enter numbers correctly!
      </div>
    </main>
  );
};

export default App;
