import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
// import { css } from 'emotion';
// import { stylesFactory, useTheme } from '@grafana/ui';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  // const theme = useTheme();
  // const styles = getStyles();

  // let color: string;
  // switch (options.color) {
  //   case 'red':
  //     color = theme.palette.redBase;
  //     break;
  //   case 'green':
  //     color = theme.palette.greenBase;
  //     break;
  //   case 'blue':
  //     color = theme.palette.blue95;
  //     break;
  // }

  // const radii = data.series
  //   .map(series => series.fields.find(field => field.type === 'number'))
  //   .map(field => field?.values.get(field.values.length - 1));

  // return (
  //   <svg
  //     className={styles.svg}
  //     width={width}
  //     height={height}
  //     xmlns="http://www.w3.org/2000/svg"
  //     xmlnsXlink="http://www.w3.org/1999/xlink"
  //     viewBox={`0 -${height / 2} ${width} ${height}`}
  //   >
  //     <g fill={color}>
  //       {radii.map((radius, index) => {
  //         const step = width / radii.length;
  //         return <circle r={radius} transform={`translate(${index * step + step / 2}, 0)`} />;
  //       })}
  //     </g>
  //   </svg>
  // );

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

// const getStyles = stylesFactory(() => {
//   return {
//     wrapper: css`
//       position: relative;
//     `,
//     svg: css`
//       position: absolute;
//       top: 0;
//       left: 0;
//     `,
//     textBox: css`
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       padding: 10px;
//     `,
//   };
// });
