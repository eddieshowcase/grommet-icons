import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const Memory = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="0 0 24 24" a11yTitle="Memory" {...props}>
    <path stroke="#000" strokeWidth="2" d="M10 18h4m-4-4h4m-4-4h4m-4-4h4m6 12h3m-3-4h3m-3-4h3m-3-4h3M1 18h3m-3-4h3m-3-4h3M1 6h3m11 14h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zM5 20h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z" />
  </StyledIcon>
));

Memory.displayName = 'Memory';

export { Memory };
