import React from 'react';
import Rectangle from '../Rectangle';

export default function Summary() {
  return (
    <div>
      <h2>Componente de Sumário</h2>
      <Rectangle type={'Reaction'} number={80} />
      <Rectangle type={'Memory'} number={92} />
      <Rectangle type={'Verbal'} number={61} />
      <Rectangle type={'Visual'} number={73} />
    </div>
  );
}
