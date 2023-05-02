// A component that renders error codes and messages sent by the server
const DefaultErrorFallback = ({ error }) => {
  return <div>{JSON.stringify(error)}</div>;
};

export default DefaultErrorFallback;
