import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "react-bootstrap";
export const Landingpages = () => {
  const divRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
  });

  const cardOpacities = [
    useTransform(scrollYProgress, [0, 0.2], [1, 1]),
    useTransform(scrollYProgress, [0.2, 0.4], [0.25, 1]),
    useTransform(scrollYProgress, [0.4, 0.6], [0.25, 1]),
    useTransform(scrollYProgress, [0.6, 0.8], [0.25, 1]),
    useTransform(scrollYProgress, [0.8, 1], [0.25, 1]),
  ];

  const lineTransforms = [
    useTransform(scrollYProgress, [0, 0.2], [0.5, 1]),
    useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
    useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
    useTransform(scrollYProgress, [0.6, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0.8, 1], [0, 1]),
  ];

  const cheeseConeRotation = useTransform(scrollYProgress, [0, 0.5], [0, 180]);
  const domeRoundCubeRotation = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    [0, -180]
  );
  const torusRotation = useTransform(scrollYProgress, [0.8, 1], [0, 180]);

  return (
    <>
      <div className="vh-100 mt-5">
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
          className="position-relative vh-400 align-items-center mt-5"
        >
          <motion.div className="position-sticky top-100">
            <Container>
              <div className="mb-4 d-flex flex-column gap-1">
                <h2>Our software development life-cycle</h2>
                <p>
                  From initial concept to ongoing support, our structured
                  life-cycle ensures your software is delivered efficiently and
                  effectively.
                </p>
              </div>
              <div className="d-flex">
                {/* <div>
                  {[
                    "Discovery & Planning",
                    "Design",
                    "Development",
                    "Testing",
                    "Deployment",
                  ].map((title, index) => (
                    <motion.div
                      key={index}
                      className="position-relative d-flex gap-5 w-400"
                      style={{
                        opacity: cardOpacities[index],
                      }}
                    >
                      <div className="position-relative z-10 d-flex h-70 min-w-50 align-items-center justify-content-center r-32 bg-primary-500 text-white fw-bold">
                        {index + 1}
                        <div className="position-absolute w-2 left-5 custom-top h-200 bg-gray-300 group-last:hidden" />
                        <motion.div
                          className="position-absolute w-2 left-5 custom-top z-1 h-200 bg-primary-500 group-last:hidden"
                          style={{
                            scaleY: lineTransforms[index],
                            originY: "top",
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{title}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div> */}
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
                        opacity: cardOpacities[index],
                      }}
                    >
                      <div
                        className="position-relative z-index-1 d-flex justify-content-center align-items-center rounded-circle bg-primary-500 text-white fs-4 fw-bold"
                        style={{ height: "70px", minWidth: "50px" }}
                      >
                        {index + 1}
                        {index !== array.length - 1 && (
                          <div
                            className="position-absolute"
                            style={{
                              left: "50%",
                              top: "calc(100% + 18px)",
                              height: "calc(100% + 10px)",
                              width: "2px",
                              backgroundColor: "#7137fb",
                              transform: "translateX(-50%)",
                            }}
                          />
                        )}
                        {index !== array.length - 1 && (
                          <motion.div
                            className="position-absolute"
                            style={{
                              left: "50%",
                              top: "calc(100% + 18px)",
                              zIndex: "2",
                              height: "calc(100% + 10px)",
                              width: "2px",
                              backgroundColor: "#f8f5ff",
                              transform: `translateX(-50%)`,
                              scaleY: lineTransforms[index],
                              originY: "top",
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

                {/* <div className="relative hidden h-[700px] w-full items-center  ml:flex">
                  <motion.div
                    className="absolute bottom-14 left-10 z-10 xl:bottom-8 xl:left-28"
                    style={{ rotate: cheeseConeRotation }}
                  >
                    <img
                      alt="cheese-half"
                      className="size-[140px] xl:size-[170px]"
                      height={170}
                      src="/images/cheese-half.png"
                      width={170}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute right-4 top-6 z-10 xl:right-12 xl:top-12"
                    style={{ rotate: cheeseConeRotation }}
                  >
                    <img
                      alt="cone"
                      className="size-[200px] xl:size-[240px]"
                      height={240}
                      src="/images/cone.png"
                      width={240}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute left-6 top-14 z-10 xl:left-20 xl:top-24"
                    style={{ rotate: domeRoundCubeRotation }}
                  >
                    <img
                      alt="dome"
                      className="size-[130px] xl:size-[160px]"
                      height={160}
                      src="/images/dome.png"
                      width={160}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute"
                    style={{ rotate: domeRoundCubeRotation }}
                  >
                    <img
                      alt="round-cube"
                      className="w-[180px] xl:w-[200px]"
                      height={200}
                      src="/images/round-cube.png"
                      width={200}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-14 right-6 z-10 xl:bottom-28 xl:right-12"
                    style={{ rotate: torusRotation }}
                  >
                    <img
                      alt="torus-half"
                      className="w-[180px] xl:w-[230px]"
                      height={230}
                      src="/images/torus-half.png"
                      width={230}
                    />
                  </motion.div>
                  <img
                    alt="torus"
                    className="absolute"
                    height={400}
                    src="/images/torus.png"
                    width={400}
                  />
                </div> */}
              </div>
            </Container>
          </motion.div>
        </section>
      </div>
    </>
  );
};
