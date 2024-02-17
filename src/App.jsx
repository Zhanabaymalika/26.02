import React, { useState } from 'react';

const App = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [border, setBorder] = useState(false);
  const [borderThickness, setBorderThickness] = useState(1);
  const [borderColor, setBorderColor] = useState('#000000');

  const divStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
    border: border ? `${borderThickness}px solid ${borderColor}` : 'none',
  };

  return (
    <div>
      <div>
        <h2>Настройки</h2>
        <label>Ширина (px):</label>
        <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value))} />
        <br />
        <label>Высота (px):</label>
        <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value))} />
        <br />
        <label>Цвет фона:</label>
        <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
        <br />
        <label>Добавить границу:</label>
        <input type="checkbox" checked={border} onChange={(e) => setBorder(e.target.checked)} />
        <br />
        {border && (
          <>
            <label>Толщина границы (px):</label>
            <input type="number" value={borderThickness} onChange={(e) => setBorderThickness(parseInt(e.target.value))} />
            <br />
            <label>Цвет границы:</label>
            <input type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} />
            <br />
          </>
        )}
      </div>
      <div>
        <h2>Предпросмотр</h2>
        <div style={divStyle}></div>
      </div>
    </div>
  );
};

export default App;
