import { fabric } from 'fabric';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { backgroundImages } from '../constant';

const FabricCanvas = ({ height, width, zoomRatio }, ref) => {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: 'lightgrey',
      height: height,
      selection: false,
      width: width,
    });
    fabric.Image.fromURL(backgroundImages[0], image => {
      image.set({
        originX: 'left',
        originY: 'top',
        opacity: 0.8,
      });
      image.scaleToHeight(height);
      image.scaleToWidth(width);
      canvas.setBackgroundImage(image).requestRenderAll();
    });
    fabricCanvasRef.current = { canvas };
    return () => {
      canvas.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { canvas } = fabricCanvasRef.current;
    canvas
      .setHeight(height)
      .setWidth(width)
      .setZoom(zoomRatio);
  }, [height, width, zoomRatio]);

  useImperativeHandle(ref, () => ({
    get canvas() {
      return fabricCanvasRef.current.canvas;
    },
  }));

  return <canvas ref={canvasRef} />;
};

export default forwardRef(FabricCanvas);
