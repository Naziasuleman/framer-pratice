import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  CheeseHalf,
  Cone,
  Dome,
  RoundCube,
  Torus,
  TorusHalf,
} from "../../assets";

export const Landingpages = () => {
  const divRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
  });

  //slider functionality
  const sliderPointsOpacity = [
    useTransform(scrollYProgress, [0, 0.2], [1, 1]),
    useTransform(scrollYProgress, [0.2, 0.4], [0.25, 1]),
    useTransform(scrollYProgress, [0.4, 0.6], [0.25, 1]),
    useTransform(scrollYProgress, [0.6, 0.8], [0.25, 1]),
    useTransform(scrollYProgress, [0.8, 1], [0.25, 1]),
  ];
  const SliderLineTransforms = [
    useTransform(scrollYProgress, [0, 0.2], [0.5, 1]),
    useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
    useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
    useTransform(scrollYProgress, [0.6, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0.8, 1], [0, 1]),
  ];

  const domeAndCubeValues = useTransform(
    scrollYProgress,
    [0.6, 0.7],
    [0, -180]
  );
  const HalfCheeseAndConeValues = useTransform(
    scrollYProgress,
    [0, 0.6],
    [0, 180]
  );

  const torusValues = useTransform(scrollYProgress, [0.8, 1], [0, 180]);

  return (
    <>
      <div className="mt-5">
        <div>
          <motion.section
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 1,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="d-flex justify-content-center gap-4"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                },
              }}
            >
              <button
                type="button"
                className="btn btn-warning border-warning fw-bold "
              >
                Start
              </button>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                },
              }}
            >
              <button
                type="button"
                className="btn btn-warning border-warning fw-bold "
              >
                Your
              </button>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                },
              }}
            >
              <button
                type="button"
                className="btn btn-warning border-warning fw-bold "
              >
                Project
              </button>
            </motion.div>
          </motion.section>
        </div>

        <section
          ref={divRef}
          className="position-relative align-items-center justify-content-center mt-5 vh-50"
        >
          <motion.div className="position-sticky">
            <div className="container-xl">
              <div className="mb-4 d-flex flex-column gap-1">
                <h2>Our software development life-cycle</h2>
                <p>
                  From initial concept to ongoing support, our structured
                  life-cycle ensures your software is delivered efficiently and
                  effectively.
                </p>
              </div>
              <div className="d-flex gap-5">
                <div className="mb-4 ">
                  {[
                    "Discovery & Planning",
                    "Design",
                    "Development",
                    "Testing",
                    "Deployment",
                  ].map((title, index, array) => (
                    <motion.div
                      key={index}
                      className="d-flex align-items-center gap-5 position-relative"
                      style={{
                        marginBottom: window.innerWidth < 576 ? "3rem" : "6rem",
                        opacity: sliderPointsOpacity[index],
                      }}
                    >
                      <div
                        className="position-relative z-index-1 d-flex justify-content-center align-items-center rounded-circle bg-primary-500 text-white fs-4 fw-bold"
                        style={{ height: "70px", minWidth: "50px" }}
                      >
                        {index + 1}
                        {index !== array.length - 1 && (
                          <div
                            className="position-absolute bg-primary-500"
                            style={{
                              left: "50%",
                              top: "calc(100% + 18px)",
                              height: "calc(100% + 10px)",
                              width: "2px",
                              transform: "translateX(-50%)",
                            }}
                          />
                        )}
                        {index !== array.length - 1 && (
                          <motion.div
                            className="position-absolute bg-gray-300"
                            style={{
                              left: "50%",
                              top: "calc(100% + 18px)",
                              zIndex: "2",
                              height: "calc(100% + 10px)",
                              width: "2px",
                              transform: `translateX(-50%) scaleY(${SliderLineTransforms[index]})`,
                              transformOrigin: "top",
                            }}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="fs-4 fw-bold">{title}</h3>
                        <p>
                          We analyze your needs and define project goals to
                          create a clear roadmap.
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div
                  className="position-relative d-none d-xl-flex align-items-center w-100"
                  style={{ height: "600px" }}
                >
                  <motion.div
                    className="position-absolute"
                    style={{
                      left: "360px",
                      top: "40px",
                      zIndex: "10",
                      rotate: domeAndCubeValues,
                    }}
                  >
                    <img
                      alt="dome"
                      height={160}
                      src={Dome}
                      width={160}
                      style={{
                        maxWidth: "130px",
                        maxHeight: "130px",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="position-absolute"
                    style={{
                      right: "-30px",
                      top: "40px",
                      zIndex: "10",
                      rotate: HalfCheeseAndConeValues,
                    }}
                  >
                    <img
                      alt="cone"
                      height={240}
                      src={Cone}
                      width={240}
                      style={{
                        maxWidth: "200px",
                        maxHeight: "200px",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    className="position-absolute "
                    style={{
                      bottom: "35px",
                      left: "400px",
                      zIndex: "10",
                      rotate: HalfCheeseAndConeValues,
                    }}
                  >
                    <img
                      alt="cheesehalf"
                      height={170}
                      src={CheeseHalf}
                      width={170}
                      style={{
                        maxWidth: "140px",
                        maxHeight: "140px",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="position-absolute"
                    style={{
                      bottom: "30px",
                      right: "2px",
                      zIndex: "10",
                      rotate: torusValues,
                    }}
                  >
                    <img
                      alt="torushalf"
                      height={230}
                      src={TorusHalf}
                      width={230}
                      style={{
                        maxWidth: "180px",
                        maxHeight: "180px",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    className="position-absolute "
                    style={{
                      left: "520px",
                      top: "220px",
                      zIndex: "10",
                      rotate: domeAndCubeValues,
                    }}
                  >
                    <img
                      alt="roundcube"
                      height={200}
                      src={RoundCube}
                      width={200}
                      style={{
                        maxWidth: "180px",
                        maxHeight: "180px",
                      }}
                    />
                  </motion.div>

                  <img
                    alt="torus"
                    className="position-absolute"
                    style={{
                      left: "400px",
                    }}
                    height={400}
                    src={Torus}
                    width={400}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};
