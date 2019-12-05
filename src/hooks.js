import { useContext, useEffect, useRef, useState } from 'react';
import { CanvasContext } from './component/canvas-context-provider';

export const useActiveObject = (
  resetCurrentActiveObject,
  updateCurrentActiveObject
) => {
  const canvasContext = useContext(CanvasContext);
  const [activeObject, setActiveObject] = useState(null);
  useEffect(() => {
    const {
      current: { canvas },
    } = canvasContext;
    ['selection:created', 'selection:updated'].forEach(event =>
      canvas.on(event, event => setActiveObject(event.target))
    );
    canvas.on('object:modified', event =>
      updateCurrentActiveObject(event.target)
    );
    canvas.on('selection:cleared', () => setActiveObject(null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasContext]);

  useEffect(() => {
    if (activeObject === null) resetCurrentActiveObject();
    else updateCurrentActiveObject(activeObject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeObject]);

  return activeObject;
};

export const useCanvas = () => {
  const canvasContext = useContext(CanvasContext);
  const ref = useRef(null);
  useEffect(() => {
    const {
      current: { canvas },
    } = canvasContext;
    ref.current = canvas;
  }, [canvasContext]);

  return ref.current;
};
