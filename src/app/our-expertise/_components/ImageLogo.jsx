import Image from "next/image";

const ImageLogo = () => {
  return (
    <section>
      <div className="container">
        <hr />
        <div className="flex  items-center gap-24 flex-col mt-24">
          <h2 className="text-center  xl:text-[58px] lg:text-[50px] text-[32px] font-normal leading-20   ">
            Building a dedicated team at{" "}
            <span className="text-primary leading-10  xl:text-[58px] lg:text-[50px] text-[32px] font-normal ">
              HexaBells
            </span>
          </h2>

          <div className=" block md:hidden">
            <div className=" items-center flex flex-col gap-9">
              <div className="  block">
                <Image
                  src="/assets/images/experties/mainpic.svg"
                  alt="main picture"
                  width={205.239}
                  height={205.239}
                />
              </div>
              <div className="flex gap-4">
                <div className="min-w-[55px] w-[55px]">
                  <Image
                    className="w-full "
                    src="/assets/images/experties/knowledge.svg"
                    alt="main picture"
                    width={55}
                    height={55}
                  />
                </div>
                <div>
                  <h3 className="text-Text-Primary font-poppins text-lg font-semibold leading-7">
                    Knowledge of Your Organization
                  </h3>
                  <p className="text-Text-Secondry font-poppins text-base font-normal leading-5">
                    A committed workforce is hand-picked to fit your needs. We
                    can swiftly comprehend how your firm operates and what it
                    wants because our devoted personnel can concentrate on your
                    unique conditions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[55px] w-[55px]">
                  <Image
                    className="w-full "
                    src="/assets/images/experties/formation.svg"
                    alt="main picture"
                    width={55}
                    height={55}
                  />
                </div>
                <div>
                  <h3 className="text-Text-Primary font-poppins text-lg font-semibold leading-7">
                    Fast Team Formation
                  </h3>
                  <p className="text-Text-Secondry font-poppins text-base font-normal leading-5">
                    We quickly and flexibly establish teams. With staff members
                    always ready for redeployment, our teams are dispersed
                    across several projects with changing demands.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[55px] w-[55px]">
                  <Image
                    className="w-full "
                    src="/assets/images/experties/prescribed.svg"
                    alt="main picture"
                    width={55}
                    height={55}
                  />
                </div>
                <div>
                  <h3 className="text-Text-Primary font-poppins text-lg font-semibold leading-7">
                    Prescreened Resources
                  </h3>
                  <p className="text-Text-Secondry font-poppins text-base font-normal leading-5">
                    We prescreen all possible team applicants for your company
                    since we don't want to waste your time by selecting the
                    wrong people, always putting your requirements first.
                  </p>
                </div>
              </div>
              <div className="">
                <Image
                  src="/assets/images/experties/main3.svg"
                  alt="main picture"
                  width={205.239}
                  height={205.239}
                />
              </div>
              <div className="flex gap-4">
                <div className="min-w-[55px] w-[55px]">
                  <Image
                    className="w-full "
                    // className=" mx-auto block"
                    src="/assets/images/experties/manager2.svg"
                    alt="main picture"
                    width={55}
                    height={55}
                  />
                </div>
                <div>
                  <h3>Dedicated Manager</h3>
                  <p>
                    A committed team manager is always appointed by us. This
                    appointee collaborates with you to assemble a team with the
                    expertise you require.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[55px] w-[55px]">
                  <Image
                    className="w-full "
                    src="/assets/images/experties/longterm.svg"
                    alt="main picture"
                    width={55}
                    height={55}
                  />
                </div>
                <div>
                  <h3>Long-Term Relationship</h3>
                  <p>
                    We have a track record of developing fruitful, lasting
                    connections with clients locally. Our skilled teams are
                    adept at creating enduring connections and cooperating
                    effectively, and we are expanding it internationally.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[55px] w-[55px]">
                  <Image
                    className="w-full "
                    src="/assets/images/experties/knowledge.svg"
                    alt="main picture"
                    width={55}
                    height={55}
                  />
                </div>
                <div>
                  <h3>Management, How It’s Supposed to Be</h3>
                  <p>
                    We put an emphasis on maintaining a well-developed HR
                    procedure and routine, open communication because we want
                    you to succeed. All project-related communications and good
                    project management are provided for our professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" hidden md:block ">
            <div className="mb-24">
              <Image
                className="w-100 h-100 my-0 mb-md-3 object-cover bg-no-repeat "
                src="/assets/images/experties/team21.svg"
                width={1000}
                height={1000}
                alt="Circle"
              />
            </div>

            <div>
              <Image
                className="w-100 h-100 my-0 mb-md-3 object-cover bg-no-repeat "
                src="/assets/images/experties/team22.svg"
                width={1000}
                height={1000}
                alt="Circle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageLogo;
