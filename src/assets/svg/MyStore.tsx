import type { SVGProps } from 'react';
const SvgMyStore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    viewBox='0 0 89 89'
    {...props}
  >
    <g filter='url(#myStore_svg__a)'>
      <path fill='url(#myStore_svg__b)' d='M4 0h81v81H4z' shapeRendering='crispEdges' />
    </g>
    <defs>
      <pattern id='myStore_svg__b' width={1} height={1} patternContentUnits='objectBoundingBox'>
        <use xlinkHref='#myStore_svg__c' transform='scale(.00042)' />
      </pattern>
      <filter
        id='myStore_svg__a'
        width={89}
        height={89}
        x={0}
        y={0}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_844_233' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_844_233' result='shape' />
      </filter>
      <image
        id='myStore_svg__c'
        width={2400}
        height={2400}
      />
    </defs>
  </svg>
);
export default SvgMyStore;