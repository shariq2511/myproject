export default function Hero() {
  return (
    <section className="relative">
      <div className="flex justify-center items-start min-h-screen pt-0 mt-4"> {/* Add mt-4 for margin top */}
        <video
          className="w-full h-auto"
          controls
          autoPlay
          muted
          loop
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/2786d3dcf3a04c9884c0df6cca8a2d43.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
