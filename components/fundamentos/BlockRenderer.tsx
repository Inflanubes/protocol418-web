// components/fundamentos/BlockRenderer.tsx
import type { Block } from '@/lib/fundamentos';
import { TextoBlock } from './blocks/TextoBlock';
import { EsquemaBlock } from './blocks/EsquemaBlock';
import { GaleriaBlock } from './blocks/GaleriaBlock';
import { GotchaBlock } from './blocks/GotchaBlock';
import { TerminosBlock } from './blocks/TerminosBlock';

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case 'texto':
      return <TextoBlock body={block.body} />;
    case 'esquema':
      return (
        <EsquemaBlock
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          caption={block.caption}
        />
      );
    case 'galeria':
      return <GaleriaBlock images={block.images} />;
    case 'gotcha':
      return <GotchaBlock body={block.body} />;
    case 'terminos':
      return <TerminosBlock items={block.items} />;
  }
}
