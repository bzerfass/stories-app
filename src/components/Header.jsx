import React, { Component } from 'react';


/**
 * Header component
 * props: none
 * components: none
 */
const Header = (props) => (
	<header className="header card">
  	  <h1 className="header-title">Patient Health Questionnaire (PHQ-9)</h1>
  	  <div className="header-subtitle">Over the last two weeks, how often have you been bothered by any of the following problems?</div>
    </header>
);

export default Header
