import React, { Component } from 'react'
import Header from '../template/Header'
import Main from '../template/Main'

class Ultimolancamento extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      rocket: [],
      cores: [],
      second_stage: [],
      payloads: [],
      norad_id: [],
      orbit_params: [],
      fairings: [],
      ships: [],
      telemetry: [],
      launch_site: [],
      links: [],
      flickr_images: []
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL_UL)
      .then(res => res.json())
      .then((data) => {
        this.setState({ flickr_images: data.links.flickr_images })
        this.setState({ links: data.links })
        this.setState({ launch_site: data.launch_site })
        this.setState({ telemetry: data.telemetry })
        this.setState({ ships: data.ships })
        this.setState({ fairings: data.rocket.fairings })
        this.setState({ orbit_params: data.rocket.second_stage.payloads[0].orbit_params })
        this.setState({ payloads: data.rocket.second_stage.payloads[0] })
        this.setState({ second_stage: data.rocket.second_stage })
        this.setState({ cores: data.rocket.first_stage.cores[0] })
        this.setState({ rocket: data.rocket })
        this.setState({ todos: data })
        //console.log(this.state.todos)
        //console.log(this.state.todos.rocket)
        console.log(this.state.flickr_images.length)
      })
      .catch(console.log)


  }

  render() {
    return (
      <React.Fragment>
        <Header {...Ultimolancamento} />
        <Main icon="rocket" title="Ultimo Lancamento" className="container">
          <div className="col-xs-12">
            <div className="card-body">
              <h5 className="card-title"><span className="text-primary">mission_name: {this.state.todos.mission_name}</span></h5>
              <h6 className="card-subtitle mb-2">
                {<span>flight_number: <span className="text-muted">{this.state.todos.flight_number}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>launch_year: <span className="text-muted">{this.state.todos.launch_year}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>launch_date_unix: <span className="text-muted">{this.state.todos.launch_date_unix}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>launch_date_utc: <span className="text-muted">{this.state.todos.launch_date_utc}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>launch_date_local: <span className="text-muted">{this.state.todos.launch_date_local}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>is_tentative: <span className="text-muted">{this.state.todos.is_tentative ? this.state.todos.is_tentative : 'false'}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>tentative_max_precision: <span className="text-muted">{this.state.todos.tentative_max_precision}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>tbd: <span className="text-muted">{this.state.todos.tbd ? this.state.todos.tbd : 'false'}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>launch_window: <span className="text-muted">{this.state.todos.launch_window ? this.state.todos.launch_window : 'null'}</span> </span>}
              </h6>

              <h6 className="card-subtitle mb-0">
                <ul>
                  <span className="text-secundary">rocket:</span>
                  {<ul><span>rocket_id: <span className="text-muted">{this.state.rocket.rocket_id}</span> </span></ul>}
                  {<ul><span>rocket_name: <span className="text-muted">{this.state.rocket.rocket_name}</span> </span></ul>}
                  {<ul><span>rocket_type: <span className="text-muted">{this.state.rocket.rocket_type}</span> </span></ul>}
                  <ul>
                    <ul><span className="text-secundary">first_stage:</span></ul>
                    <ul>
                      <ul><span className="text-secundary">cores:</span></ul>
                      <ul>
                        {<ul><span>rocket_type: <span className="text-muted">{this.state.cores.core_serial}</span> </span></ul>}
                        {<ul><span>flight: <span className="text-muted">{this.state.cores.flight}</span> </span></ul>}
                        {<ul><span>block: <span className="text-muted">{this.state.cores.block}</span> </span></ul>}
                        {<ul><span>gridfins: <span className="text-muted">{this.state.cores.gridfins ? 'true' : 'false'}</span> </span></ul>}
                        {<ul><span>legs: <span className="text-muted">{this.state.cores.legs ? 'true' : 'false'}</span> </span></ul>}
                        {<ul><span>reused: <span className="text-muted">{this.state.cores.reused ? 'true' : 'false'}</span> </span></ul>}
                        {<ul><span>land_success: <span className="text-muted">{this.state.cores.land_success ? 'true' : 'null'}</span> </span></ul>}
                        {<ul><span>landing_intent: <span className="text-muted">{this.state.cores.landing_intent ? 'true' : 'false'}</span> </span></ul>}
                        {<ul><span>landing_type: <span className="text-muted">{this.state.cores.landing_type ? this.state.cores.landing_type : 'null'}</span> </span></ul>}
                        {<ul><span>landing_vehicle: <span className="text-muted">{this.state.cores.landing_vehicle ? this.state.cores.landing_vehicle : 'null'}</span> </span></ul>}
                      </ul>
                      <span className="text-secundary">second_stage:</span>
                      {<ul><span>block: <span className="text-muted">{this.state.second_stage.block ? this.state.second_stage.block : 'null'}</span> </span></ul>}
                      <ul>
                        <span className="text-secundary">payloads:</span>
                        {<ul><span>payload_id: <span className="text-muted">{this.state.payloads.payload_id ? this.state.payloads.payload_id : 'null'}</span> </span></ul>}
                        {<ul>norad_id: <span><span className="text-muted">{this.state.norad_id == null ? this.state.norad_id : 'null'}</span> </span></ul>}
                        {<ul><span>reused: <span className="text-muted">{this.state.payloads.reused ? 'true' : 'false'}</span> </span></ul>}
                        {<ul><span>customers: <span className="text-muted">{this.state.payloads.customers ? this.state.payloads.customers : 'null'}</span> </span></ul>}
                        {<ul><span>nationality: <span className="text-muted">{this.state.payloads.nationality ? this.state.payloads.nationality : 'null'}</span> </span></ul>}
                        {<ul><span>manufacturer: <span className="text-muted">{this.state.payloads.manufacturer ? this.state.payloads.manufacturer : 'null'}</span> </span></ul>}
                        {<ul><span>payload_type: <span className="text-muted">{this.state.payloads.payload_type ? this.state.payloads.payload_type : 'null'}</span> </span></ul>}
                        {<ul><span>payload_mass_kg: <span className="text-muted">{this.state.payloads.payload_mass_kg ? this.state.payloads.payload_mass_kg : 'null'}</span> </span></ul>}
                        {<ul><span>payload_mass_lbs: <span className="text-muted">{this.state.payloads.payload_mass_lbs ? this.state.payloads.payload_mass_lbs : 'null'}</span> </span></ul>}
                        {<ul><span>orbit: <span className="text-muted">{this.state.payloads.orbit ? this.state.payloads.orbit : 'null'}</span> </span></ul>}
                      </ul>
                      <ul>
                        <span className="text-secundary">orbit_params:</span>
                        {<ul><span>orbit: <span className="text-muted">{this.state.orbit_params.reference_system ? this.state.orbit_params.reference_system : 'null'}</span> </span></ul>}
                        {<ul><span>regime: <span className="text-muted">{this.state.orbit_params.regime ? this.state.orbit_params.regime : 'null'}</span> </span></ul>}
                        {<ul><span>longitude: <span className="text-muted">{this.state.orbit_params.longitude ? this.state.orbit_params.longitude : 'null'}</span> </span></ul>}
                        {<ul><span>semi_major_axis_km: <span className="text-muted">{this.state.orbit_params.semi_major_axis_km ? this.state.orbit_params.semi_major_axis_km : 'null'}</span> </span></ul>}
                        {<ul><span>eccentricity: <span className="text-muted">{this.state.orbit_params.eccentricity ? this.state.orbit_params.eccentricity : 'null'}</span> </span></ul>}
                        {<ul><span>periapsis_km: <span className="text-muted">{this.state.orbit_params.periapsis_km ? this.state.orbit_params.periapsis_km : 'null'}</span> </span></ul>}
                        {<ul><span>apoapsis_km: <span className="text-muted">{this.state.orbit_params.apoapsis_km ? this.state.orbit_params.apoapsis_km : 'null'}</span> </span></ul>}
                        {<ul><span>inclination_deg: <span className="text-muted">{this.state.orbit_params.inclination_deg ? this.state.orbit_params.inclination_deg : 'null'}</span> </span></ul>}
                        {<ul><span>period_min: <span className="text-muted">{this.state.orbit_params.period_min ? this.state.orbit_params.period_min : 'null'}</span> </span></ul>}
                        {<ul><span>lifespan_years: <span className="text-muted">{this.state.orbit_params.lifespan_years ? this.state.orbit_params.lifespan_years : 'null'}</span> </span></ul>}
                        {<ul><span>epoch: <span className="text-muted">{this.state.orbit_params.epoch ? this.state.orbit_params.epoch : 'null'}</span> </span></ul>}
                        {<ul><span>mean_motion: <span className="text-muted">{this.state.orbit_params.mean_motion ? this.state.orbit_params.mean_motion : 'null'}</span> </span></ul>}
                        {<ul><span>raan: <span className="text-muted">{this.state.orbit_params.raan ? this.state.orbit_params.raan : 'null'}</span> </span></ul>}
                        {<ul><span>arg_of_pericenter: <span className="text-muted">{this.state.orbit_params.arg_of_pericenter ? this.state.orbit_params.arg_of_pericenter : 'null'}</span> </span></ul>}
                        {<ul><span>mean_anomaly: <span className="text-muted">{this.state.orbit_params.mean_anomaly ? this.state.orbit_params.mean_anomaly : 'null'}</span> </span></ul>}
                        {<ul><span>uid: <span className="text-muted">{this.state.payloads.uid ? this.state.payloads.uid : 'null'}</span> </span></ul>}
                      </ul>
                      <span className="text-secundary">fairings: <span className="text-muted">{this.state.fairings ? this.state.fairings : 'null'}</span></span>
                      {/* {<ul><span>reused: <span className="text-muted">{this.state.fairings.reused ? this.state.fairings.reused : 'null'}</span> </span></ul>} */}
                      {/* {<ul><span>recovery_attempt: <span className="text-muted">{this.state.fairings.recovery_attempt ? this.state.fairings.recovery_attempt : 'null'}</span> </span></ul>} */}
                      {/* {<ul><span>recovered: <span className="text-muted">{this.state.fairings.recovered ? this.state.fairings.recovered : 'null'}</span> </span></ul>} */}
                      {/* {<ul><span>ship: <span className="text-muted">{this.state.fairings.ship ? this.state.fairings.ship : 'null'}</span> </span></ul>} */}
                    </ul>
                  </ul>
                </ul>
              </h6>

              <h6 className="card-subtitle mb-2">
                {<span>ships: <span><span className="text-muted">{this.state.ships.length === 0 ? '[ ]' : this.state.ships}</span> </span></span>}
              </h6>

              <h6 className="card-subtitle mb-2">
                <span className="text-secundary">telemetry:</span>
                {<ul><span>flight_club: <span className="text-muted">{this.state.telemetry.flight_club ? this.state.telemetry.flight_club : 'null'}</span> </span></ul>}
              </h6>

              <h6 className="card-subtitle mb-2">
                <span className="text-secundary">launch_site:</span>
                <ul>
                  {<ul><span>site_id: <span className="text-muted">{this.state.launch_site.site_id}</span> </span></ul>}
                  {<ul><span>site_name: <span className="text-muted">{this.state.launch_site.site_name}</span> </span></ul>}
                  {<ul><span>site_name_long: <span className="text-muted">{this.state.launch_site.site_name_long}</span> </span></ul>}
                </ul>
              </h6>


              <h6 className="card-subtitle mb-2">
                {<span>launch_success: <span className="text-muted">{this.state.todos.launch_success === true ? 'true' : 'null'}</span> </span>}
              </h6>


              <h6 className="card-subtitle mb-2">
                <span className="text-secundary">links:</span>
                <ul>
                  {<a href={this.state.links.mission_patch} rel="noopener noreferrer" target="_blank"><ul><span>mission_patch: <span className="text-muted">{this.state.links.mission_patch === null ? 'null' : this.state.links.mission_patch}</span> </span></ul></a>}
                  {<a href={this.state.links.mission_patch_small} rel="noopener noreferrer" target="_blank"><ul><span>mission_patch_small: <span className="text-muted">{this.state.links.mission_patch_small === null ? 'null' : this.state.links.mission_patch_small}</span> </span></ul></a>}
                  {<a href={this.state.links.reddit_campaign} rel="noopener noreferrer" target="_blank"><ul><span>reddit_campaign: <span className="text-muted">{this.state.links.reddit_campaign === null ? 'null' : this.state.links.reddit_campaign}</span></span></ul></a>}
                  {<a href={this.state.links.reddit_launch} rel="noopener noreferrer" target="_blank"><ul><span>reddit_launch: <span className="text-muted">{this.state.links.reddit_launch === null ? 'null' : this.state.links.reddit_launch}</span></span></ul></a>}
                  {<a href={this.state.links.reddit_recovery} rel="noopener noreferrer" target="_blank"><ul><span>reddit_recovery: <span className="text-muted">{this.state.links.reddit_recovery === null ? 'null' : this.state.links.reddit_recovery}</span></span></ul></a>}
                  {<a href={this.state.links.reddit_media} rel="noopener noreferrer" target="_blank"><ul><span>reddit_media: <span className="text-muted">{this.state.links.reddit_media === null ? 'null' : this.state.links.reddit_media}</span></span></ul></a>}
                  {<a href={this.state.links.presskit} rel="noopener noreferrer" target="_blank"><ul><span>presskit: <span className="text-muted">{this.state.links.presskit === null ? 'null' : this.state.links.presskit}</span></span></ul></a>}
                  {<a href={this.state.links.article_link} rel="noopener noreferrer" target="_blank"><ul><span>article_link: <span className="text-muted">{this.state.links.article_link === null ? 'null' : this.state.links.article_link}</span></span></ul></a>}
                  {<a href={this.state.links.wikipedia} rel="noopener noreferrer" target="_blank"><ul><span>wikipedia: <span className="text-muted">{this.state.links.wikipedia === null ? 'null' : this.state.links.wikipedia}</span></span></ul></a>}
                  {<a href={this.state.links.video_link} rel="noopener noreferrer" target="_blank"><ul><span>video_link: <span className="text-muted">{this.state.links.video_link === null ? 'null' : this.state.links.video_link}</span></span></ul></a>}
                  {<a href={this.state.links.youtube_id} rel="noopener noreferrer" target="_blank"><ul><span>youtube_id: <span className="text-muted">{this.state.links.youtube_id === null ? 'null' : this.state.links.youtube_id}</span></span></ul></a>}
                  {<ul><span>flickr_images: <span className="text-muted">{this.state.flickr_images.length === 0 ? '[ ]' : this.state.flickr_images.length}</span></span></ul>}
                </ul>
              </h6>


              <h6 className="card-subtitle mb-2">
                {<span>details: <span className="text-muted">{this.state.todos.details}</span> </span>}
              </h6>


              <h6 className="card-subtitle mb-2">
                {<span>upcoming: <span className="text-muted">{this.state.todos.upcoming ? 'true' : 'false'}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>static_fire_date_utc: <span className="text-muted">{this.state.todos.static_fire_date_utc}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>static_fire_date_unix: <span className="text-muted">{this.state.todos.static_fire_date_unix}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>timeline: <span className="text-muted">{this.state.todos.timeline ? this.state.todos.timeline : 'null'}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>crew: <span className="text-muted">{this.state.todos.crew ? this.state.todos.crew : 'null'}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>last_date_update: <span className="text-muted">{this.state.todos.last_date_update}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>last_ll_launch_date: <span className="text-muted">{this.state.todos.last_ll_launch_date == null ? 'null' : this.state.todos.last_ll_launch_date}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>last_ll_update: <span className="text-muted">{this.state.todos.last_ll_update == null ? 'null' : this.state.todos.last_ll_update}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>last_wiki_launch_date: <span className="text-muted">{this.state.todos.last_wiki_launch_date}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>last_wiki_revision: <span className="text-muted">{this.state.todos.last_wiki_revision}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>last_wiki_update: <span className="text-muted">{this.state.todos.last_wiki_update}</span> </span>}
              </h6>
              <h6 className="card-subtitle mb-2">
                {<span>launch_date_source: <span className="text-muted">{this.state.todos.launch_date_source}</span> </span>}
              </h6>


            </div>
          </div>
        </Main>
      </React.Fragment>
    );
  }
}
export default Ultimolancamento;