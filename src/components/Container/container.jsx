import React from 'react';
import Footer from '../Footer/footer';

const style = {
  padding: '2.7rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};


const style2 = {
  padding: '2.7rem',
  paddingTop: 0,
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function Container(props) {
  return (
    <React.Fragment>
      {props.page === '404' ? (
        <div style={style2}>{props.children}</div>
      ) : (
        <div style={style}>{props.children}</div>
      )}
      <Footer />
    </React.Fragment>
  );
}

export default Container;
