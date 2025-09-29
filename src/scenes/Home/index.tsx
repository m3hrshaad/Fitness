import { SelectedPage } from "../../shared/types"
import useMediaQuery from "../../hooks/useMediaQuery"
import ActionButton from "../../shared/ActionButton"
import HomePageText from "../../assets/HomePageText.png"
import HomePageGraphic from "../../assets/HomePageGraphic.png"
import SponsorRedBull from "../../assets/SponsorRedBull.png"
import SponsorForbes from "../../assets/SponsorForbes.png"
import SponsorFortune from "../../assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section id="home" className="gap-16 bg-gray-100 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <div>
        {/* main header */}
        <div>
          {/* headings */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio exercitationem magni eaque repellendus fuga, sunt facilis voluptatem aperiam. Autem quibusdam fugit odit praesentium, nisi iusto voluptates doloremque quasi ut.</p>
          </div>

          {/* Actions */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink className="text-sm font-bold text-red-300 underline hover:text-yellow-400"
              onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* Image */}
        <div>
          <img src={HomePageGraphic} alt="home-pageGraphic" />
        </div>
      </div>
      {isAboveMediumScreens && (
        <div>
          <div>
            <img src={SponsorRedBull} alt="redbull-sponsor" />
            <img src={SponsorForbes} alt="forbes-sponsor" />
            <img src={SponsorFortune} alt="fortune-sponsor" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Home