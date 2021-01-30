import React, { useCallback, useState } from "react"
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }: { mobile: boolean }) => (
  <Container text>
    <Header
      as='h1'
      content='warframe-notifier'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Subscribe for notification when desired Warframe resources are available on alerts and invasions'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Subscribe
        <Icon name='arrow right' />
    </Button>
  </Container>
)

export const Home = () => {
  return (
    <Desktop />
  )
}

const Desktop: React.FunctionComponent = (props) => {
  const [fixed, setFixed] = useState(false);
  const hideFixedMenu = useCallback(() => setFixed(false), []);
  const showFixedMenu = useCallback(() => setFixed(true), []);

  const { children } = props

  return (
    <div>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : undefined}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
              <Menu.Item as='a' active>
                Home
                </Menu.Item>
              <Menu.Item as='a'>Subscriptions</Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading mobile={false} />
        </Segment>
      </Visibility>

      {children}
    </div>
  )
}