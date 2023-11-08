import route from '../../components/route.ts';

export default () => `
<h3>For Entrepreneurs</h3>
<p>Please first review our ${route(`preferences`, `investment preferences`)}. If you feel your company may be a good fit for us, please send a short description of your company or short slide deck to <a href="mailto:exec@SEMNCapital.com">exec@SEMNCapital.com</a>. Or, better yet, submit them to our Gust.com page, <a href="https://www.gust.com/organizations/southeast-minnesota-capital-fund">gust.com/organizations/southeast-minnesota-capital-fund</a>.</p>

<h3>For Members/Investors</h3>
<p>SMCF is currently raising its second fund which will be open to "accredited investors" as defined by the Securities and Exchange Commission. If you would like to consider becoming a member, please contact <a href="mailto:exec@SEMNCapital.com">exec@SEMNCapital.com</a>.</p>
`;
