'use client';

import { Streamdown } from 'streamdown';

export const Viewer = () => {
  return (
    <Streamdown>
      {`
\`\`\`bash
ls-la
\`\`\`
      `}
    </Streamdown>
  );
};
