import React from 'react';
import Preview from './';
import { shallow } from 'enzyme';

describe('Preview Component', () => {
  const url = 'https://ephtracking.cdc.gov/apigateway/api/v1/measures/null/0/0';
  it('rendes correctly', () => {
    const tree = shallow(<Preview url={url} isValid={false} />);
    expect(tree).toMatchSnapshot();
  });

  it('resets state.copied after receiving new url', () => {
    const newUrl =
      'https://ephtracking.cdc.gov/apigateway/api/v1/measures/242/0/0';
    const wrapper = shallow(<Preview url={url} />);
    expect(wrapper.state().copied).toBe(false);
    wrapper.setState({ copied: true });
    expect(wrapper.state().copied).toBe(true);
    wrapper.setProps({ url }); // same url, no change
    expect(wrapper.state().copied).toBe(true);
    wrapper.setProps({ url: newUrl }); // new url
    expect(wrapper.state().copied).toBe(false);
  });

  it('set state.copied to true after clicking on the copy-button', () => {
    const wrapper = shallow(<Preview url={url} />);
    expect(wrapper.state().copied).toBe(false);
    wrapper.instance().handleCopy();
    expect(wrapper.state().copied).toBe(true);
  });
});
