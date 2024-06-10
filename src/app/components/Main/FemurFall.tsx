import React, { useEffect, useRef, useState } from "react";

interface FallingObject {
  x: number;
  y: number;
  speed: number;
  rotation: number;
  image: HTMLImageElement;
  width: number;
  height: number;
}

const FemurFall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const objects: FallingObject[] = [];
  const [isAnimating, setIsAnimating] = useState(true);
  const totalBones = 100; // Total number of bones to fall
  let bonesFallen = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const femurImage = new Image();
    femurImage.src = "femur.png"; // Path to your femur image
    const tibiaImage = new Image();
    tibiaImage.src = "femur.png"; // Path to your tibia image

    const imagesLoaded = Promise.all([
      new Promise<HTMLImageElement>((resolve) => {
        femurImage.onload = () => resolve(femurImage);
      }),
      new Promise<HTMLImageElement>((resolve) => {
        tibiaImage.onload = () => resolve(tibiaImage);
      }),
    ]);

    const animate = () => {
      if (!isAnimating) return;
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and render bones
      objects.forEach((object) => {
        object.y += object.speed;
        ctx.save();
        ctx.translate(object.x, object.y);
        ctx.rotate(object.rotation);
        ctx.drawImage(
          object.image,
          -object.width / 2,
          -object.height / 2,
          object.width,
          object.height
        );
        ctx.restore();
      });

      // Remove bones that have fallen out of view
      for (let i = objects.length - 1; i >= 0; i--) {
        if (objects[i].y > canvas.height + objects[i].height) {
          objects.splice(i, 1);
        }
      }

      // Generate new bones
      if (bonesFallen < totalBones) {
        const newBone = {
          x: Math.random() * canvas.width,
          y: -50, // Start above the canvas
          speed: Math.random() * 2 + 1, // Random speed
          rotation: Math.random() * Math.PI * 2, // Random rotation
          image: Math.random() > 0.5 ? femurImage : tibiaImage, // Randomly choose between femur and tibia
          width: 20, // Adjust based on actual image dimensions
          height: 40, // Adjust based on actual image dimensions
        };
        objects.push(newBone);
        bonesFallen++;
      }

      // Stop animation if all bones have fallen
      if (bonesFallen >= totalBones && objects.length === 0) {
        setIsAnimating(false);
      }
    };

    imagesLoaded.then(() => {
      setIsAnimating(true);
      animate();
    });

    return () => setIsAnimating(false);
  }, [isAnimating]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default FemurFall;
