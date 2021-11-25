const WasNeues = () => <div>Chinese: 世界，你好！</div>;

const MyFirstComponent: React.FC = ({ children }) => (
  <>
    <div style={{ backgroundColor: "blue", color: "white" }}>
      Hallo Welt {Math.random() > 0.5 ? "!" : "?"}
    </div>
    <div>English: Hello, world!</div>
    {children}
    <WasNeues />
  </>
);

export default MyFirstComponent;
