import React from 'react';

import { Title } from '../../src';

export default { title: 'Elements/Title' };

export function Default() {
  return <Title tag="h1">captalento</Title>;
}

export function DefaultH2() {
  return (
    <Title tag="h2" variant="blue">
      captalento
    </Title>
  );
}

export function OtherSize() {
  return (
    <Title tag="h2" size="xs">
      captalento
    </Title>
  );
}
