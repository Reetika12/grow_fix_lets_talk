<Grid  container className="meetForCoffePattern">
                {/* <Grid style={{ background: "black", height: "100vh", overflow: "hidden" }} item xs={12} sm={6}>
                </Grid> */}
                <h2 className="weLikeVideoCall">Let's craft your product</h2>
                <div className="parentCoffee">
                    <div>
                        <h4 className="margin-xxs-bottom">Timeframe</h4>
                        <RadioGroup aria-label="radiotype" name="radiotype" onChange={this.handleRadioTagOption}>
                            <FormControlLabel id="great_project" value="great_project" control={<CustomRadio />} label="1 month" />
                            <FormControlLabel id="meet_for_coffee" value="meet_for_coffee" control={<CustomRadio />} label="2-3 months" />
                            <FormControlLabel id="birds_and_bees" value="birds_and_bees" control={<CustomRadio />} label="4+ months" />
                        </RadioGroup>
                        <div>
                            <h4 className="margin-xxs-bottom">Project type</h4>
                            <label className="container">One
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Two
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Three
                                    <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    <div>
                            
                    </div>
                    </div>
                    <div className="personalDetails">
                        <h4 className="margin-xxs-bottom">Personal details</h4>
                        <input
                            type="text"
                            className="inputStyle"
                            value={name}
                            onChange={e => this.setState({ name: e.target.value })}
                            placeholder="Name" id="name" />
                        <input
                            type="text"
                            className="inputStyle"
                            placeholder="Email"
                            value={email}
                            onChange={e => this.setState({ email: e.target.value })}
                            id="Email" />
                    </div>
                    <div className="sendEnquiryPattern">
                        <textarea
                            className="textArea"
                            value={textArea}
                            onChange={e => this.setState({ textArea: e.target.value })}
                            placeholder="What do you want to talk about?" />
                        <button type="button" id="go" onClick={this.checkForValidation} className="SendEnquiry">Send Enquiry</button>
                    </div>
                </div>
                <ToastMessage
                    open={openToast}
                    handleClose={this.handleCloseToast}
                    message={toastMsg}
                />
            </Grid>