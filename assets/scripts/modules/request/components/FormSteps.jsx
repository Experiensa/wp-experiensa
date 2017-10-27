import React, {Component} from 'react';
import { Grid, Icon, Step } from 'semantic-ui-react';

export default class BreadcrumbForm extends Component {
  constructor(){
    super()
  }

  render() {
    const page = this.props.page;
    return(
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <Step.Group>
              <Step active={page==1?true:false}>
                <Icon name="world"/>
                <Step.Content>
                  <Step.Title>Destination</Step.Title>
                </Step.Content>
              </Step>
              <Step active={page==2?true:false} disabled={page<2?true:false}>
                <Icon name="plane"/>
                <Step.Content>
                  <Step.Title>Flight</Step.Title>
                </Step.Content>
              </Step>
              <Step active={page==3?true:false} disabled={page<3?true:false}>
                <Icon name="hotel"/>
                <Step.Content>
                  <Step.Title>Hosting</Step.Title>
                </Step.Content>
              </Step>
              <Step active={page==4?true:false} disabled={page<4?true:false}>
                <Icon name="travel"/>
                <Step.Content>
                  <Step.Title>Theme</Step.Title>
                </Step.Content>
              </Step>
              <Step active={page==5?true:false} disabled={page<5?true:false}>
                <Icon name="car"/>
                <Step.Content>
                  <Step.Title>Transport</Step.Title>
                </Step.Content>
              </Step>
              <Step active={page==6?true:false} disabled={page<6?true:false}>
                <Icon name="mail outline"/>          
                <Step.Content>
                  <Step.Title>Request</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}