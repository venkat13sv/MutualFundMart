import React from 'react';
export default class Body extends React.Component {
    render() {
        return (
          <div>
          <div className="w3ls_banner_bottom_right1">
                    <img src="/images/mutualFundCycle.jpg"/>
                  	<h4>What is Mutual Fund?</h4>
          					<p>A mutual fund is a company that pools money from many investors and invests the money in securities such as stocks, bonds, and short-term debt.</p>
          						<p>It is the ideal investment for the new player who does not know much about investing.
                      It has comparatively low risk compared to equity market, as you money is diversified.
                      Though it is not an alternative to Stock market, but definitely a good option to invest. All mutual fund are regulated by SEBI.</p>
          					<ul className="some_agile_facts">
          						<li><i className="fa fa-long-arrow-right" aria-hidden="true"></i> Home Loan.</li>
          						<li><i className="fa fa-long-arrow-right" aria-hidden="true"></i> Personal Loan</li>
          						<li><i className="fa fa-long-arrow-right" aria-hidden="true"></i> Education Loan</li>
          						<li><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Car Loan</li>
          					</ul>
          </div>
<div className="middle-w3l">
	<div className="col-md-3 w3ls-special-img text_info">
		<h4>Our Scheme and Category</h4>
	</div>
  	</div>
	<div className="col-md-3 w3ls-special-img w3l-grid-1">
		<div className="w3ls-special-text effect-1">
			<h4>Corporate Bond Fund</h4>
			<ul>
				<li>Secured  </li>
				<li>Transaction</li>

			</ul>
		</div>
	</div>
	<div className="col-md-3 w3ls-special-img w3l-grid-2">
		<div className="w3ls-special-text effect-1">
			<h4>Equity Savings Fund</h4>
			<ul>
				<li>Savings </li>
				<li>Planning </li>

			</ul>
		</div>
	</div>
		<div className="col-md-3 w3ls-special-img w3l-grid-3">
		<div className="w3ls-special-text effect-1">
			<h4>Long Duration Fund</h4>
			<ul>
				<li>Income </li>
				<li>Fund</li>

			</ul>
		</div>
	</div>
	<div className="clearfix"> </div>

</div>


        );
      }
}
