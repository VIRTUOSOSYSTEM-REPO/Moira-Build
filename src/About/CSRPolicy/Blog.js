import React from "react";
import Badge from "../../Components/base/Badge";
import Paragraph from "../../Components/base/Paragraph";
const Blog = () => {
  return (
    <div className="blogPage">
      <div className="about" id="about" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="about-body index">
          <div className="about-description">
            <h2 style={{ color: "#000000" }}>
              MOIRA <span style={{ color: "#000000" }}>CSR Policy</span>
            </h2>
            <p style={{ color: "#000000" }}>
              Pursuant to the provisions of Section 135 (3)(a) of the Companies
              Act, 2013, the CSR policy of the company formulated and
              recommended by the Corporate Social Responsibility committee
              adopted by the board is as follows:
              <br />
              <div className="pt-4">
                <Badge text={"1. Vision:"} />
                <Paragraph
                  text={
                    "We will ensure sustainability by doing what is right, through the adoption of sustainable business practices, employee policies and technologies. We endeavor to protect the interests of all our stakeholders and contribute to society at large, by making a measurable and positive difference."
                  }
                />
              </div>
              <div className="pt-2">
                <Badge text={"2. Activities to be undertaken:"} />
                <Paragraph
                  text={
                    "The Company shall concentrate its efforts on the following CSR activities among the activities specified in schedule VII to the Companies Act, 2013."
                  }
                />
                <div className="ps-3 lh-sm">
                <Paragraph text={"1: Promoting education/ employment enhancing vocational skills"} />
                <Paragraph text={"2: Eradicating poverty/ hunger/ malnutrition, promoting health care/ sanitation/ safe drinking water."} />
                <Paragraph text={"3: Setting-up public libraries, development of traditional arts and handicrafts."} />
                <Paragraph text={"4: Promoting gender equality/ empowering women and measures reducing inequalities faced by socially and economically backward groups."} />
                <Paragraph text={""} />
                </div>
              </div>
              <div className="pt-2">
                <Badge text={"3. Resources:"} />
                <Paragraph
                  text={
                    "We will utilize 2% of the average net profits of the Company made during 3 intermediate preceding financial years. Any surplus arising out of Corporate Social Responsibility (“CSR”) projects, programmes or activities shall not form part of the business profit of the Company and would be ploughed back for CSR activities."
                  }
                />
              </div>
              <div className="pt-2">
                <Badge text={"4. Geographical Location:"} />
                <Paragraph
                  text={
                    "The Act provided that the Company shall give preference to the local area and areas around it where it operates, for spending the amount earmarked for Corporate Social Responsibility. However, the committee may identify such areas other than stated above, as it may deem fit, and recommend it to the board for undertaking CSR activities."
                  }
                />
              </div>
              <div className="pt-2">
                <Badge text={"5. Implementation Mechanism:"} />
                <Paragraph
                  text={
                    "We shall implement the project by supporting the institutions and entities which are already beneficiaries of the Company’s voluntary CSR effort. This policy is consciously adopted to ensure sustained development of such institutions and entities."
                  }
                />
                <Paragraph
                  text={
                    "However, such support shall be extended only after receiving a detailed report of the institutions/ entities concerned, and the committee is satisfied with the performance of the beneficiary."
                  }
                />
              </div>
              <div className="pt-2">
                <Badge text={"6. Monitoring Mechanism::"} />
                <Paragraph
                  text={
                    "The CSR committee will be responsible for monitoring approved projects and fund disbursals for such projects. The CSR committee will put in place a transparent monitoring and reporting mechanism for ensuring effective implementation of the projects, programmes and activities proposed to be undertaken by the Company."
                  }
                />
                <Paragraph
                  text={
                    "For institutions and entities other than those coming under para 5 above, the following documents of the prospective beneficiary shall be verified before sanctioning any support from the CSR fund:-"
                  }
                />
                <Paragraph
                  text={
                    "The charter document like the Registration Certificate, Memorandum of Association etc."
                  }
                />
                <div className="ps-3">
                  <Paragraph
                    text={
                      "1: A report on the past activities before approaching the Company for support."
                    }
                  />
                  <Paragraph
                    text={
                      "2: Details of the project or venture for which the support is sought."
                    }
                  />
                  <Paragraph
                    text={
                      "3: Measurable goals to be achieved specifying timelines."
                    }
                  />
                  <Paragraph
                    text={
                      "4: Proposed budget for the activities planned, and the details of funds committed, and the shortfall sought to be met by the contribution from the Company."
                    }
                  />
                </div>
                <Paragraph text={"Recurrence of the support to an existing beneficiary shall be considered only upon its submitting a satisfactory report on performance."} />
                <Paragraph text={"The Board of Directors on its own and/ or on the recommendation of CSR committee can amend its policy as and when required deemed fit. Any or all provisions of CSR policy would be subjected to revision/ amendment in accordance with the regulations on the subject as may be issued from relevant statutory authorities, from time to time."} />
                
              </div>
              <div className="pt-2">
                <Badge
                  text={
                    "7. Composition and/ or Re-Composition of the CSR Committee of the Board:"
                  }
                />
                <Paragraph
                  text={
                    "The Board has reconstituted the CSR committee."
                  }
                />
                <div className="ps-3">
                <Paragraph text={"1: Mr. Madhu Kalidindi – Non-Executive Director (Chairman)"} />
                <Paragraph text={"2: Mr. Andreas Hartleif – Non-Executive Director (Member)"} />
                <Paragraph text={"3: Mr. Pratap Kantheti – Non-Executive Independent Director (Member)"} />
                <Paragraph text={"4: Ms. Anuradha Rao – Non-Executive Independent Director (Member)"} />
                </div>
                <Paragraph text={"The CSR committee may meet at least once in six months to consider the pending requests and make allocation of funds to the aspiring beneficiaries."} />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
