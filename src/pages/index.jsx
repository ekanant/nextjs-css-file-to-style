import React from 'react';

const Page = () => (
  <>
    <div
      className="bg-dark"
      style={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: -2,
      }}
    />
    <div className="container">
      <div className="row">
        <div className="col">
          This is in container
        </div>
      </div>
    </div>
  </>
);

export default Page;
