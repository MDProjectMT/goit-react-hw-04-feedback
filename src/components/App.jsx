import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework-04 feedback
      </div>
      <div>
        <Feedback />
      </div>
    </>
  );
};
